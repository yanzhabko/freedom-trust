class EmailService {
  async sendEmail(dataModel) {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataModel),
    });
    if (!response.ok) {
      throw new Error("Error ");
    }
    const data = await response.json();
    console.log(data);
    return data.result;
  }
}

export default new EmailService();
