import React from 'react';

export default function Footer() {
  return (
    <div>
      <br />
      <br />
      <footer style={{
        padding: "15px 20px", 
        textAlign: "center", 
        color: "white", 
        fontSize: "18px"
      }}>
        <hr style={{ borderColor: "white", margin: "20px 0" }} />
        <div style={{ padding: "10px" }}>
          Copyright &copy; CoalTrace.com | All Rights Reserved
        </div>
      </footer>

      <style>
        {`
          @media (max-width: 768px) {
            footer {
              font-size: 16px;
              padding: 10px 15px;
            }
          }

          @media (max-width: 480px) {
            footer {
              font-size: 14px;
              padding: 8px 10px;
            }

            footer div {
              padding: 8px;
            }
          }
        `}
      </style>
    </div>
  );
}