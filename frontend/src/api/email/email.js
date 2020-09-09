
export const emailReport = (email, title, subject, csv) => {
    fetch('http://localhost:4000/mail', {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, title: title, subject: subject, csv: csv })
    }).catch(error => console.log(error))
}
