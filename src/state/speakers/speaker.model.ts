import { ID } from '@datorama/akita';

export type Speaker = {
  id: ID,
  name: string;
  avatar?: string;
  conferenceId: number;
}