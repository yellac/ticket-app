import { Subjects } from "./subjects";

// To create connection between subject name and the structure
// of the event data it carries
export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}
