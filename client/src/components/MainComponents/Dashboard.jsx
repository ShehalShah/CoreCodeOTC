import React, { useState } from "react";
import ffmpeg from "fluent-ffmpeg";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const input = selectedFile;

        // Construct the output file path
        const outputFilePath = "output.mp3";

        // Run FFmpeg to convert video to audio
        ffmpeg()
          .input(input.path)
          .audioCodec("libmp3lame")
          .audioBitrate(192)
          .audioChannels(2)
          .audioFrequency(44100)
          .on("end", () => {
            // Now, you can proceed with uploading or further processing of the audio file
            console.log(
              "Conversion finished. Uploading or processing the audio file."
            );
          })
          .on("error", (err) => {
            console.error("Error during video to audio conversion:", err);
          })
          .save(outputFilePath);
      } catch (error) {
        console.error("Error during video to audio conversion:", error);
      }
    } else {
      console.warn("No file selected for upload.");
    }
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
                  id="videoFile"
                  accept="video/*"
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
