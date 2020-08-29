
export const emailReport = (title, subject, csv) => {
    fetch('http://localhost:4000/mail', {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title, subject: subject, csv: csv })
    }).catch(error => console.log(error))
}
