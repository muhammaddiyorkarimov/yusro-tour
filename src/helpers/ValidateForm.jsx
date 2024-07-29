const ValidateForm = ({name, phoneNumber}) => {
    const errors = {};
    const placeholders = {};
    if (!name) {
        errors.name = "Ism maydoni talab qilinadi.";
        placeholders.name = "Ism maydoni talab qilinadi.";
    }
    if (!phoneNumber) {
        errors.phoneNumber = "Telefon raqami maydoni talab qilinadi.";
        placeholders.phoneNumber = "Telefon raqami maydoni talab qilinadi.";
    }
    return { errors, placeholders };
};

export default ValidateForm