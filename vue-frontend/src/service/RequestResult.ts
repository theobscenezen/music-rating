export class RequestResult {
  response: any | null = {};
  error: any;

  constructor(response: any | null, error: any) {
    this.response = response;
    this.error = error;
  }
}
