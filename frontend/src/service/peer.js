class PeerService {
    constructor() {
      this.peer = new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:global.stun.twilio.com:3478",
            ],
          },
        ],
      });
  
      this.setupPeerListeners();
    }
  
    setupPeerListeners() {
      this.peer.addEventListener("icecandidate", (event) => {
        if (event.candidate) {
          // You may want to send the ICE candidate to the other peer
        }
      });
    }
  
    async getAnswer(offer) {
      try {
        await this.peer.setRemoteDescription(new RTCSessionDescription(offer));
  
        const answer = await this.peer.createAnswer();
        await this.peer.setLocalDescription(answer);
  
        return answer;
      } catch (error) {
        console.error("Error creating answer:", error);
      }
    }
  
    async setLocalDescription(answer) {
      try {
        await this.peer.setRemoteDescription(new RTCSessionDescription(answer));
      } catch (error) {
        console.error("Error setting local description:", error);
      }
    }
  
    async getOffer() {
      try {
        const offer = await this.peer.createOffer();
        await this.peer.setLocalDescription(offer);
  
        return offer;
      } catch (error) {
        console.error("Error creating offer:", error);
      }
    }
  
    addTrack(stream) {
      try {
        stream.getTracks().forEach((track) => {
          this.peer.addTrack(track, stream);
        });
      } catch (error) {
        console.error("Error adding track:", error);
      }
    }
  }
  
  export default new PeerService();
  