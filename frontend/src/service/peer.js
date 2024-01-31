class PeerService {
    constructor() {
        if (!this.peer) {
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
          }
          this.remoteStreams = {};
    }
  
    async getAnswer(offer) {
      if (this.peer) {
        await this.peer.setRemoteDescription(offer);
        const ans = await this.peer.createAnswer();
        await this.peer.setLocalDescription(new RTCSessionDescription(ans));
        return ans;
      }
    }
  
    async setLocalDescription(ans) {
      if (this.peer) {
        await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
      }
    }
  
    async getOffer() {
      if (this.peer) {
        const offer = await this.peer.createOffer();
        await this.peer.setLocalDescription(new RTCSessionDescription(offer));
        return offer;
      }
    }

    async getRemoteStream(peerId) {
        if (this.remoteStreams[peerId]) {
          return this.remoteStreams[peerId];
        }
        return null;
      }
    
      addRemoteStream(peerId, stream) {
        this.remoteStreams[peerId] = stream;
      }
    }
  
  export default new PeerService();