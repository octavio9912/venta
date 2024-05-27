const generateHtml = (name, mail, suggestion) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Suggestion Email</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    margin: 0;
                    padding: 20px;
                    color: #333;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .header {
                    text-align: center;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #ddd;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                    color: #555;
                }
                .content {
                    padding: 20px 0;
                }
                .content p {
                    margin: 10px 0;
                    line-height: 1.6;
                }
                .content p span {
                    font-weight: bold;
                    color: #555;
                }
                .footer {
                    text-align: center;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                    font-size: 12px;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🛎️📨 Nueva sugerencia recivida! 🛎️📨</h1>
                </div>
                <div class="content">
                    <p><span>From:</span> ${mail}</p>
                    <p><span>To:</span> armandoh.ibarra@gmail.com</p>
                    <p><span>Suggestion:</span></p>
                    <p>${`${name} ' envido una sugerencia: ' ${suggestion}`}</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};

module.exports = generateHtml;