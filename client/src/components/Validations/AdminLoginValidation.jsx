import { object, string } from "yup";

const errorMessages = {
  stringError: "Lütfen geçerli bir değer giriniz",
  requiredError: "Lütfen bu alanı boş bırakmayınız",
};

const AdminLoginValidation = object({
  username: string(errorMessages.stringError).required(errorMessages.requiredError),
  password: string(errorMessages.stringError).required(errorMessages.requiredError), 
});

export default AdminLoginValidation;
