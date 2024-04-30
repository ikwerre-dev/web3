import React from 'react';
import data from './functions/TokenDetails';
import '../ViewTokenLeft.css';
import Comment from './Comment';
import TableforTokens from './TableforTokens';

function ViewTokenLeft({ id }) {

    const details = data[id];

    if (!details) {
        return <p>Data not found for this ID.</p>;
    }
    return (
        <div className="viewtoken card mt-3">
            <div className="card-header">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="discussion-tab" data-bs-toggle="tab" data-bs-target="#discussion-tab-pane" type="button" role="tab" aria-controls="discussion-tab-pane" aria-selected="true">Discussion</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="trade-tab" data-bs-toggle="tab" data-bs-target="#trade-tab-pane" type="button" role="tab" aria-controls="trade-tab-pane" aria-selected="false">Trade</button>
                    </li>

                </ul>

            </div>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show discussion-tab active p-3" id="discussion-tab-pane" role="tabpanel" aria-labelledby="discussion-tab" tabindex="0">
                    <div className="row">
                        <div className="col-1 p-3">
                            <div className="profile-box" />
                        </div>
                        <div className="col-11">
                            <textarea name="" className='form-control' id="" ></textarea>
                        </div>
                    </div>

                    <div className="comments row mt-4">
                        {details.comments && details.comments.map((item, index) => (
                            <Comment
                                key={index}
                                id={item.id}
                                color={item.color}
                                name={item.name}
                                creationTime={item.creationTime}
                                comment={item.comment}
                                likeCount={item.likeCount}
                            />
                        ))}

                    </div>
                </div>
                <div class="tab-pane fade" id="trade-tab-pane" role="tabpanel" aria-labelledby="trade-tab" tabindex="0">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <td>Account</td>
                                <td>Type</td>
                                <td>SOL</td>
                                <td>SNUFF</td>
                                <td>Date</td>
                                <td>Transaction</td>
                            </tr>
                        </thead>
                        <tbody>
                            {details.transactions && details.transactions.map((item, index) => (
                                <TableforTokens item={item} index={index} key={index} />
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewTokenLeft;
