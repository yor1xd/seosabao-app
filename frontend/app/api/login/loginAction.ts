export default async function LoginAction(formdata: FormData) {
    const json = { email: formdata.get("email"), password: formdata.get("password")};

    const res = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
    })

    console.log(res);
}