import "./faq.style.css";

function FAQ() {
  const question = [
    "How FDs are taxed",
    "How FDs are taxed",
    "How FDs are taxed",
  ];
  const answer = [
    "Lorem ipsum dolor sit amet, consectetur t amet, consectetur adipisicing elit. Neque",
    "Lorem ipsum dolor sit amet, consectetur t amet, consectetur adipisicing elit. Neque",
    "Lorem ipsum dolor sit amet, consectetur t amet, consectetur adipisicing elit. Neque",
  ];

  return (
    <>
      <div className="faqWrapper">
        <div className="anwerHeading">
          <div>
            Get Answer <br />
            <span className="ansTitle">to all your questions</span>
          </div>
          <div className="iconArrow">
            <i
              className="pi pi-angle-left"
              style={{ color: "grey", fontSize: "2rem" }}
            ></i>
            <i
              className="pi pi-angle-right"
              style={{ color: "black", fontSize: "2rem" }}
            ></i>
          </div>
        </div>
        <div className="faqCardFlex">
          {question.map((ele, ind) => (
            <div className="faqCard">
              <div className="ques">{ele}</div>

              <div className="ans">{answer[ind]}</div>

              <div className="link">
                <a href="#"> Read more... </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
