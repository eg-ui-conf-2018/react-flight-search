import React, {PureComponent} from 'react';
import './FlightSearch.css';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/**
https://hackathon.expedia.com/docs/public/api/Flight%20Search/

Note: Currently API searches are only allowed for following airports.
["ABR","ABI","CAK","ALS","ABY","ALB","ABQ","AEX","ABE","AIA","APN","AOO","AMA","ANC","ATW","AVL","ASE","AHN","ATL","ACY","AGS","AUG","AUS","BFL","BWI", "BGR","BHB","BRW","BTR","BPT","BKW","BED","BLI","BJI","BET","BTT","BIL","BGM","BHM","BIS","BMI","BMG","BLF","BOI","BOS","BZN","BKX","BRO","BQK","BUF", "BUR","BRL","BBF","BTV","BTM","CGI","CLD","CNM","CPR","CID","CMI","CHS","CRW","CLT","CHO","CHA","CYS","CHI","MDW","CHI","ORD","CIC","CVG","CKB","CLE", "CVN","COD","CLL","COS","COU","CAE","CSG","CLU","GTR","OLU","CMH","CDV","CRP","DAL","DFW","DAY","DAB","DEC","DEN","DSM","DTW","DTT","DVL","DIK","DLG", "DDC","DHN","DUJ","DBQ","DLH","DRO","DUT","EAU","EEK","IPL","ELD","ELP","EKO","ELM","WDG","ERI","ESC","EUG","ACV","EVV","FAI","FAR","FMN","XNA","FAY", "FLG","FNT","FLO","FOD","FLL","TBN","RSW","FSM","VPS","FWA","FYU","FAT","GNV","GCK","GCC","GDV","GFK","GRI","GJT","GRR","GBD","GTF","GRB","LWB","GSO", "GLH","PGV","GSP","GPT","GUC","HGR","HNM","CMX","HRL","MDT","HRO","BDL","HVR","HYS","HLN","HIB","Big","HHH","HOB","HOM","HNL","MKK","EFD","HOU","IAH", "EFD","HTS","HSV","HON","HYA","IDA","IND","INL","IYK","IMT","IWD","ISP","ITH","JAC","JAN","MKL","JAX","OAJ","JMS","JHW","JST","JPR","JLN","JNU","OGG","BFF", "AZO","LUP","FCA","MCI","JHM","EAR","ENA","KTM","EYW","GRK","AKN","IGM","IRK","LMT","TYS","ADQ","LSE","LFT","LCH","Hll","LNY","LNS","LAN","LAR","LRD", "LRU","LAS","LBE","PIB","LAW","LAB","LWS","LEW","LWT","LEX","LBL","LIH","LNK","LIT","LGB","GGG","QLA","SDF","LBB","LYH","MCN","MSN","MHT","MHK","MBL", "MWA","MQT","MVY","MCW","MSS","MFE","MCK","MFR","MLB","MEM","MEI","MIA","MAF","MLS","MKE","MSP","MOT","MSO","MOB","MOD","MLI","MLU","MRY","MGM", "MTJ","MGW","MWH","MSL","MKG","MRY","ACK","ABF","BNA","EWN","HVN","MSY","LGA","JFK","NYC","EWR","SWF","PHF","OME","ORF","OTH","LBF","OAK","OGS", "OKC","OMA","ONT","SNA","MCO","OSH","OWB","OXR","PAH","PGA","PSP","PFN","PKB","PSC","PLN","PDT","PNS","PIA","PHL","PHX","PIR","SOP","PIT","PIH","SEA", "PNC","PWM","PDX","PSM","PRC","PQI","PVD","PVC","PUB","PUW","UIN","RDU","RAP","RDD","RDM","RNO","RHI","RIC","RIW","ROA","RST","ROC","RKS","RFD","SHD", "RKD","ROW","RUT","SMF","MBS","SLN","SPY","SLC","SJT","SAT","SAN","QSF","SFO","SJC","SBP","SDP","SBA","SAF","SMX","STS","SLK","SRQ","CIU","SAV","SHR", "SDY","SVC","SUX","FSD","SIT","SGY","SBN","GEG","SPI","CEF","SGF","VSF","STC","SGU","STL","PIE","SCE","SBS","SUN","SRY","TLH","TPA","TAX","TXK","TVF", "OOK","TOL","TOP","TVC","TTN","TUS","TUL","TUP","TWF","TYR","UNK","EGE","VDZ","VLD","VCT","VIS","ACT","ALW","DCA","WAS","IAD","ALO","ART","ATY","CWA", "EAT","PBI","WYS","HPN","SPS","ICT","AVP","IPT","ISN","ILG","ILM","OLF","WRL","WRG","YKM","YAK","YUM","YXX","YAA","YEK","YBG","YYC","YBL","YGR","YCG", "YYG","YMT","YYQ","YXC","YDF","YHD","YEG","YEO","YMM","YYE","YXJ","YSM","YFC","YQX","YGP","YQU","YHZ","YHM","YFB","YKA","YLW","YQK","YGK","YQL","YXU", "YXH","YQM","YYY","YMQ","YUL","YCD","YYB","YOW","YYF","YZT","YPW","YPR","YQB","YQZ","YRT","YRL","YQR","YRJ","YUY","YSJ","YZP","YZR","YXE","YAM","YZV", "YXL","YYD","YYT","YSB","YQY","YXT","YTH","YQT","YTS","YYZ","YTO","YTZ","YVO","YVR","YYJ","YWK","YXY","YWL","YQG","YWG","YZF","LAX”,"SHV"];
*/

export default class extends PureComponent {

    constructor() {
        super();
        this.state = {
            origin: '',
            destination: '',
            departureDate: null,
            returnDate: null
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.departureDateChange = this.departureDateChange.bind(this);
        this.returnDateChange = this.returnDateChange.bind(this);
        this.onSearchFlights = this.onSearchFlights.bind(this);
    }

    onInputChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    departureDateChange(date) {
        this.setState({
            departureDate: date
        });
    }

    returnDateChange(date) {
        this.setState({
            returnDate: date
        });
    }

    validateInputs() {
        if (this.state.origin.length === 0) {
            return false;
        }
        if (this.state.destination.length === 0) {
            return false;
        }
        if (!this.state.departureDate) {
            return false;
        }
        if (!this.state.returnDate) {
            return false;
        }

        return true;
    }

    onSearchFlights() {
        this.props.searchFlights(
            this.state.origin,
            this.state.destination,
            this.state.departureDate.format('YYYY-MM-DD'),
            this.state.returnDate.format('YYYY-MM-DD')
        );
    }

    render() {
        return (
            <div className="fs-container">
                <FormGroup controlId="origin" bsSize="large">
                    <FormControl
                        type="text"
                        placeholder="Origin"
                        value={this.state.origin}
                        onChange={this.onInputChange}
                    />
                </FormGroup>
                <FormGroup controlId="destination" bsSize="large">
                    <FormControl
                        type="text"
                        placeholder="Destination"
                        value={this.state.destination}
                        onChange={this.onInputChange}
                    />
                </FormGroup>
                <DatePicker
                    placeholderText="Departure date"
                    selected={this.state.departureDate}
                    onChange={this.departureDateChange}
                />
                <DatePicker
                    placeholderText="Return date"
                    selected={this.state.returnDate}
                    onChange={this.returnDateChange}
                />
                <Button
                    bsStyle="primary"
                    style={{height: '46px'}}
                    bsSize="large"
                    onClick={this.onSearchFlights}
                >
                  {'Search'}
                </Button>
            </div>
        )
    }
}
