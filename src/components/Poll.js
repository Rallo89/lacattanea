import React, { useState, useEffect } from "react";
import "./Poll.css";

function Poll(){
    const [voteData, setVoteData] = useState();
    const [totalVotes, setTotalVotes] = useState(0);
    const [voted, setVoted] = useState(false);

    const url = "https://328r96to88.execute-api.eu-central-1.amazonaws.com/production/pollItem?pollId=SITO_CATTANEA";
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setVoteData(data);
            let sum = 0;
            data.forEach(function (obj){
                sum += obj.voted;
            });
            setTotalVotes(sum);
        });
    }, []);

    console.log(totalVotes);

    const submitVote = (e) => {
        if(voted === false){
            const voteSelected = e.target.dataset.id;
            const voteCurrent = voteData[voteSelected].votes;
            voteData[voteSelected].votes = voteCurrent + 1;
            setTotalVotes(totalVotes + 1);
            setVoted(!voted);
            const options = {
                method: "POST",
                body: JSON.stringify(voteData),
                headers: { "Content-Type": "application/json"},
            };
            fetch(url, options)
                .then((res) => res.json())
                .then((res) => console.log(res));
        }
    };

    let pollOptions;

    if (voteData) {
        pollOptions = voteData.map((item) => {
            return (
                <li key={item.value}>
                    <button onClick={submitVote} data-id={item.value}>
                    {item.value}
                    <span>- {item.voted} Votes</span>
                    </button>          
                </li>
            );
        });
    }

    return (
        <div className="poll">
          <h1>Which option do you like the best?</h1>
          <ul className={voted ? "results" : "options"}>
            {pollOptions}
          </ul>
          <p>Total Votes: {totalVotes}</p>
        </div>
      );

}
export default Poll;