import { Controller, Post } from '@nestjs/common';
import { MeetingService } from './meeting.service';
// const { SpacesServiceClient } = require('@google-cloud/meet').v2beta;

// @Controller('meeting')
// export class MeetingController {
//   constructor(private readonly meetingService: MeetingService) {}

//   @Post()
//   async createMeet() {
//     try {
//       // Instantiates a client
//       const meetClient = new SpacesServiceClient();

//       // Construct request
//       const request = {};

//       // Run request
//       const response = await meetClient.createSpace(request);
      
//       // Process the response or use it as needed
//       console.log(response);

//       // Additional logic to send the meeting link to the user's Gmail
//       // You might want to call your MeetingService to handle this part
//       // For example, this could involve sending an email to the user with the meeting link.
//       // const meetingLink = response.someProperty; // Extract the meeting link from the response
//       // await this.meetingService.sendMeetingLinkToUser(userEmail, meetingLink);

//       return { message: 'Meeting created successfully' };
//     } catch (error) {
//       console.error('Error creating meeting:', error);
//       throw new Error('Failed to create meeting');
//     }
//   }
// }
