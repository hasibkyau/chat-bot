import React from "react";
import './p-card.css'


const ProductCard = (props) => {
    return (
        <div className="p-card">
            <div className="card-img">
                <img src={props?.img}></img>
            </div>
            <div class="p-footer">
                <div className="title">
                    <p>Run, Dress</p>
                    <h5>{props?.name}</h5>
                </div>
                <div class="bottom">
                    <div class="left">
                        <div>
                        <span class="price">${props.price}</span> <span class="discount-price"><del>${props.discountPrice}</del></span>
                        </div>
                        <div>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.36332 0L10.3376 6.07631H16.7266L11.5578 9.83163L13.5322 15.9079L8.36332 12.1526L3.19446 15.9079L5.16873 9.83163L0 6.07631H6.38904L8.36332 0Z" fill="#F9BF00"/>
</svg>

<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.36332 0L10.3376 6.07631H16.7266L11.5578 9.83163L13.5322 15.9079L8.36332 12.1526L3.19446 15.9079L5.16873 9.83163L0 6.07631H6.38904L8.36332 0Z" fill="#F9BF00"/>
</svg>

<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.36332 0L10.3376 6.07631H16.7266L11.5578 9.83163L13.5322 15.9079L8.36332 12.1526L3.19446 15.9079L5.16873 9.83163L0 6.07631H6.38904L8.36332 0Z" fill="#F9BF00"/>
</svg>

<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.36332 0L10.3376 6.07631H16.7266L11.5578 9.83163L13.5322 15.9079L8.36332 12.1526L3.19446 15.9079L5.16873 9.83163L0 6.07631H6.38904L8.36332 0Z" fill="#F9BF00"/>
</svg>

<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.36332 0L10.3376 6.07631H16.7266L11.5578 9.83163L13.5322 15.9079L8.36332 12.1526L3.19446 15.9079L5.16873 9.83163L0 6.07631H6.38904L8.36332 0Z" fill="#F9BF00"/>
</svg>

                        </div>
                    </div>
                    <div class="right">
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.25 5H12.25V4C12.25 2.93913 11.8286 1.92172 11.0784 1.17157C10.3283 0.421427 9.31087 0 8.25 0C7.18913 0 6.17172 0.421427 5.42157 1.17157C4.67143 1.92172 4.25 2.93913 4.25 4V5H1.25C0.984784 5 0.73043 5.10536 0.542893 5.29289C0.355357 5.48043 0.25 5.73478 0.25 6V17C0.25 17.7956 0.566071 18.5587 1.12868 19.1213C1.69129 19.6839 2.45435 20 3.25 20H13.25C14.0456 20 14.8087 19.6839 15.3713 19.1213C15.9339 18.5587 16.25 17.7956 16.25 17V6C16.25 5.73478 16.1446 5.48043 15.9571 5.29289C15.7696 5.10536 15.5152 5 15.25 5ZM6.25 4C6.25 3.46957 6.46071 2.96086 6.83579 2.58579C7.21086 2.21071 7.71957 2 8.25 2C8.78043 2 9.28914 2.21071 9.66421 2.58579C10.0393 2.96086 10.25 3.46957 10.25 4V5H6.25V4ZM14.25 17C14.25 17.2652 14.1446 17.5196 13.9571 17.7071C13.7696 17.8946 13.5152 18 13.25 18H3.25C2.98478 18 2.73043 17.8946 2.54289 17.7071C2.35536 17.5196 2.25 17.2652 2.25 17V7H4.25V8C4.25 8.26522 4.35536 8.51957 4.54289 8.70711C4.73043 8.89464 4.98478 9 5.25 9C5.51522 9 5.76957 8.89464 5.95711 8.70711C6.14464 8.51957 6.25 8.26522 6.25 8V7H10.25V8C10.25 8.26522 10.3554 8.51957 10.5429 8.70711C10.7304 8.89464 10.9848 9 11.25 9C11.5152 9 11.7696 8.89464 11.9571 8.70711C12.1446 8.51957 12.25 8.26522 12.25 8V7H14.25V17Z" fill="#51AA1B"/>
</svg>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductCard;