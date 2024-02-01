import React, { useState, useRef } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import axios from "axios";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const ffmpegRef = useRef(new FFmpeg());

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      const ffmpeg = ffmpegRef.current;
      // Load ffmpeg.wasm
      // await ffmpeg.load();

      if (selectedFile) {
        // Convert video to audio using ffmpeg.wasm
        // const audioBlob = await convertVideoToAudio(selectedFile);
        // console.log(audi oBlob);

        // Create a FormData object
        const formData = new FormData();

        // Append the audio file to the FormData object with key "audio"
        formData.append("audio", selectedFile, "audio.mp3");

        // Send a POST request to the API endpoint
        const response = await fetch("http://localhost:5000/process_audio", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        axios
          .post("https://odd-gray-coati-cuff.cyclic.app/analysis", {
            summary: data.text,
            keywords: data.keywords,
          })
          .then(() => {
            console.log("Success");
          })
          .catch(() => {
            console.log("Error");
          });

        console.log("Response from server:", data);
      } else {
        console.warn("No file selected for upload.");
      }
    } catch (error) {
      console.error("Error during upload:", error);
    }
  };

  const convertVideoToAudio = async (videoFile) => {
    const ffmpeg = ffmpegRef.current;
    // await ffmpeg.load()

    const reader = new FileReader();

    reader.readAsArrayBuffer(videoFile);

    return new Promise((resolve) => {
      reader.onloadend = async () => {
        // Run ffmpeg.wasm to convert video to audio
        ffmpeg.writeFile("input.mp4", new Uint8Array(reader.result));
        console.log("hijik");
        ffmpeg.exec([
          "-i",
          "input.mp4",
          "-vn",
          "-acodec",
          "libmp3lame",
          "output.mp3",
        ]);

        // Read the converted audio file
        const audioData = ffmpeg.readFile("output.mp3");
        const audioBlob = new Blob([audioData.buffer], { type: "audio/mp3" });
        resolve(audioBlob);
      };
    });
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto mt-10">
            <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
              <div className="mb-4">
                <label
                  htmlFor="videoFile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Choose a video file:
                </label>
                <input
                  type="file"
                  id="audioFile"
                  accept="audio/*"
                  onChange={handleFileChange}
                  className="mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <button
                onClick={handleUpload}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Upload Video
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
