import { object, string } from "yup";

// validation error messages
const errorMessages = {
  stringError: "Lütfen geçerli bir değer giriniz",
  requiredError: "Lütfen bu alanı boş bırakmayınız",
  emailError: "Lütfen geçerli bir eposta giriniz",
};

const AdminLoginValidation = object({
  adminAnswer: string(errorMessages.stringError)
    .required(errorMessages.requiredError),

});

export default AdminLoginValidation;
