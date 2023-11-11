export default function createFormData(fields) {
    const formData = new FormData();

    for (let prop in fields) {
        formData.append(prop, fields[prop]);
    }

    return formData;
}
