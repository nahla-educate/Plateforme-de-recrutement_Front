import { RegisterPayload } from "src/app/authentif/register-payload";


export class Notif{
    id: number;
    value: string;
    statut: boolean;
    createdDate: Date;
    candidat: RegisterPayload;
    username: string;
    society: string;
    poste:string;
    dateDebut:string;
  }