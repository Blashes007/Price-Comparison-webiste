import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$20,000</span>
                    <span className="featuredMoneyRate">
                        -10 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Copared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$40,000</span>
                    <span className="featuredMoneyRate">
                        +20 <ArrowDownward className="featuredIcon "/></span>
                </div>
                <span className="featuredSub">Copared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$60,000</span>
                    <span className="featuredMoneyRate">
                    +5 <ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
