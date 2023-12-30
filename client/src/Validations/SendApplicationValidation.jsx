import { object, string, number } from "yup";



const errorMessages = 
{
    numberError: "Lütfen geçerli bir sayı giriniz",
    stringError: "Lütfen geçerli bir değer giriniz",
    requiredError: "Lütfen bu alanı boş bırakmayınız",
    positiveError: "Bu değer 0'dan küçük olamaz",

};

const SendApplicationValidation = object({
  firstName: string(errorMessages.stringError).required(errorMessages.requiredError),
  lastName: string(errorMessages.stringError).required(errorMessages.requiredError),
  age: number(errorMessages.numberError).positive(errorMessages.positiveError).integer().required(errorMessages.requiredError),
  tc: number(errorMessages.numberError).positive(errorMessages.positiveError).integer().required(errorMessages.requiredError),
  applicationReason: string(errorMessages.stringError).required(errorMessages.requiredError),
  address: string(errorMessages.stringError).required(errorMessages.requiredError),
});

export default SendApplicationValidation;