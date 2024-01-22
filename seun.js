// const mysql = ('mysql2');


// const connection = mysql.createConnection({
//     host: '',
//     user: '',
//     password: '',
//     database: '',
// });



const printReceipt = () => {
    const receptionName = document.getElementById("receptionName").value;
    const hotel = document.getElementById("hotel").value;
    const hotelRoom = document.getElementById("hotelRoom").value;
    const customerName = document.getElementById("customerName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const numberDaysInput = document.getElementById("numberDays").value;
    const amountInput = document.getElementById("amount").value;
    const paymentTransfer = document.getElementById("paymentTransfer").value;

    
    const numberDays = Number.isInteger(parseInt(numberDaysInput)) ? parseInt(numberDaysInput) : 0;
    const amount = !isNaN(parseFloat(amountInput)) ? parseFloat(amountInput) : 0;

    
    if (!receptionName || !hotel || !hotelRoom || !customerName || !phoneNumber || !customerAddress || !numberDays || !amount || !paymentTransfer) {
        console.error("Please fill in all required fields.");
        return;
    }

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const totalAmount = numberDays * amount;

    const receiptContainer = document.getElementById("receiptContainer");
    receiptContainer.innerHTML = `
        <h2>hotel & Suit</h2>
        <p><strong>Reception Name:</strong> ${receptionName}</p>
        <p><strong>Hotel:</strong> ${hotel}</p>
        <p><strong>Hotel Room:</strong> ${hotelRoom}</p>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Customer Address:</strong> ${customerAddress}</p>
        <p><strong>Number of Days:</strong> ${numberDays}</p>
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>Payment:</strong> ${paymentTransfer}</p>
        <p><strong>Current Date:</strong> ${currentDate}</p>
        <p><strong>Current Time:</strong> ${currentTime}</p>
        <p><strong>Total Amount:</strong> ${totalAmount}</p>
    `;


    const logoutDate = new Date().toLocaleDateString();
    const logoutTime = "00:00:00";
    console.log(`Logout Date: ${logoutDate}, Logout Time: ${logoutTime}`);



    // connection.query(
      

    //   seunInvoice,
    //   (error, results) => {
    //     if (error){
    //       console.log(error);
    //     }

    //     console.log('Data inserted into Mysql:', results);
    //   }

    // )

    // return seunInvoice;
}

const printReceiptAsText = () => {
    
    const receiptText = document.getElementById("receiptContainer").innerText;
    document.body.innerHTML = receiptText;
    window.print();
}