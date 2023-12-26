import { object, string, number } from "yup";


const SendApplicationValidation = object({
  firstName: string().required("Zorunlu alan"),
  lastName: string().required("Zorunlu alan"),
  age: number().required("Zorunlu alan").positive("Lütfen geçerli bir sayı giriniz").integer(),
  tc: number().required("Zorunlu alan").positive("Lütfen geçerli bir sayı giriniz").integer(),
  applicationReason: string().required("Zorunlu alan"),
  address: string().required("Zorunlu alan"),
});

export default SendApplicationValidation;