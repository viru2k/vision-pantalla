export class User {

    id:string;
    name:string;
    nombreyapellido:string;
    email:string;
    admin:string;
    grant_type:string="password";
    client_secret:string = "65LMI4rQJmikbPTETbQBrXjL4tCtOvathTQGUqUA";
    username:string;
    password:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA2OWU5NmZkNDg3N2FhNjc5ZGNmYTZkNWRmOGEwMzAxNzE3M2FlOTgzOWZjNTMyNDY4ZGM4ZjY2MGU5MzljZTZlN2E0YzUzYzc0NjVlYWE2In0.eyJhdWQiOiIxIiwianRpIjoiMDY5ZTk2ZmQ0ODc3YWE2NzlkY2ZhNmQ1ZGY4YTAzMDE3MTczYWU5ODM5ZmM1MzI0NjhkYzhmNjYwZTkzOWNlNmU3YTRjNTNjNzQ2NWVhYTYiLCJpYXQiOjE1NTY5MDIxMTgsIm5iZiI6MTU1NjkwMjExOCwiZXhwIjoxNTU3MTYxMzE4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Y1vEerY2jchYCvAMTUuVwW5sQL5fAdl0lGon4qCHmB2M-794VSSv7sXXgpqv1wwH1cdNsArsdDVwGE87UgrB4-lzNLZ5iCiF7jVVT4oCtUMiDIBBFXKDxGSXHQD-Eijy5J69w-Lb0JLM1kxVRdBfNJ2tCUuogrz38Tp5hjhLlTMUeRPdPj5o0wscJ6HuOSU_-XwXirDbA-4yk1L-yUVzMbU2dMkmI_UUhnpfxwTnDOVyjAgHjRVh2-FG482UiYGGuU6Z83u1oDxmp0mBMz0u8rEAYUS4yPGfCe0mG_Ql5egTeNd9C4e7pMYSFs4zJNvpHUttZ0oz_srWAyxaZOkVw097rUgUMME2EpyMNbvYxQY1o8Qmx1QI-6GnIMZAtZg0xxEpg5feJFO_OlOL3vMDyvGOMW_0T5MfwkFt8ZpMMzt8kNW0WSBzgvXAanNqcNosip74homCSQOXaeUhOCpxLsFYCkH0vayNCoEgCfahJ6w7uC_NnA6y_g84-1pPpPdUVMrxKxme-YuQGiXABXsrkJHnCEbFRPStgz1gfOkcuc90j7oJaXy32lwlWKpVMMVgVpVep8UJ6WSW7Pf7eE1aU6N6FWzloxpgqEdAaVRvV-EPJPfe-ivXBjjvHgUPDLMcB-ME8D7TBv2zsMhf34bYuLUefYNpItcm6EVZMHJ_Jyc";
    client_id:string = "1";
    access_list:any[];
    constructor( 
        id:string,
        name:string,
        nombreyapellido:string,
        email:string,
        admin:string,
        username:string,
        password:string,
        access_list:any[]) {
       
        this.id = id;
        this.name= name;
        this.nombreyapellido= nombreyapellido;
        this.email = email;
        this.admin =admin;
        this.username = username;
        this.password = password;
        this.access_list =access_list;
   }
}