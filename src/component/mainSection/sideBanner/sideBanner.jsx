import React from "react";
import "./sideBanner.style.css";

function SideBanner() {
  const title = ["Video KYC", "Pending Payment", "Upcoming FD Maturity"];
  const company = [
    {
      "Video KYC": {
        name: "Utkarsh SF Bank FD Plan 2",
        Tennure: "2 Years",
        toDo: "Scheduled On",
        day: 28,
        year: "Oct, 2023",
        amt: 20000,
        interest: "9.10",
        button: "Reschedule",
      },
    },
    {
      "Pending Payment": {
        name: "Bajaj Finserv Corp FD 1",
        Tennure: "18 Months",
        toDo: "Pay By",
        day: 30,
        year: "Oct, 2023",
        amt: 25000,
        interest: "8.10",
        button: "Cancel Application",
      },
    },
    {
      "Upcoming FD Maturity": {
        name: "Shriram Finance Corp FD 1",
        Tennure: "18 Months",
        toDo: "Renew by",
        day: 30,
        year: "Oct, 2023",
        amt: 25000,
        interest: "8.10",
        button: "Compare Other FDs",
      },
    },
  ];

  return (
    <>
      {title.map((ele, ind) => (
        <div className="bannerWrapper">
          <div className="bannnerTitle">{ele}</div>

          <div className="contentDetail">
            <div className="calenderDiv">
              <div className="scheduled"> Scheduled On </div>
              <div className="date">
                {company[ind][ele].day}
                <div className="year"> {company[ind][ele].year} </div>{" "}
              </div>
            </div>

            <div>
              <div className="compName">{company[ind][ele].name}</div>
              <div>
                <table>
                  <tr>
                    <th>Deposit Amt</th>
                    <th>Tennure</th>
                    <th>Interest Rate</th>
                  </tr>
                  <tr>
                    <td>Rs {company[ind][ele].amt}</td>
                    <td>{company[ind][ele].Tennure}</td>
                    <td>{company[ind][ele].interest}%</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="btn">
            <button className="completeBtn button">Complete Now</button>
            <button className="rescheduleBtn button">
              {company[ind][ele].button}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default SideBanner;
