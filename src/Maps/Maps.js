import React,{useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl,useMapEvents,MapConsumer } from 'react-leaflet'
import './style.css';
import AppLogo from '../asset/AppLogo.svg';
import L from 'leaflet';
import icon from '../asset/Marker.svg';
import Selected_Marker from '../asset/Selected_Marker.svg';
import CurrentMarker from '../asset/CurrentMarker.svg';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import { AiOutlineMenu } from "react-icons/ai";
import IconButton from '@material-ui/core/IconButton';
import { MdKeyboardArrowRight } from "react-icons/md";


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
let SelectedIcon = L.icon({
    iconUrl: Selected_Marker,
    shadowUrl: iconShadow
});
let CurrentIcon = L.icon({
    iconUrl: CurrentMarker,
    shadowUrl: iconShadow
});

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
    click() {
        map.locate()
      },
      locationfound(e) {
        console.log(e)
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position} icon={CurrentIcon}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }


  const data = {
    coordinat:[-7.26747489630225, 112.74893279783],
    items:[
        {
            nama:"Museum TNI AL Loka Jala Crana",
            coordinat:[-7.22716779828745, 112.718992672149],
            marker_icon:DefaultIcon,
            web:"https://museum-tni-al-loka-jala-crana.business.site/",
            imgUrl:"https://lh3.googleusercontent.com/9VS8T1lx-0-V8nNcEFnuGpkFvciI0LzKEg-kWSkX0E2fH24W_Ocm_tlMy-3gUOABz2kyB-Y3ANH3KoaJ=w1080-h608-p-no-v0",
            maps:"https://www.google.com/maps/place/Museum+TNI+AL+Loka+Jala+Crana/@-7.227185,112.7168083,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7f92a55555555:0x26519de6b6dac08!8m2!3d-7.227185!4d112.718997"
        },
        {
            nama:"House of Sampoerna",
            coordinat:[-7.23080573652121, 112.734234658653],
            marker_icon:DefaultIcon,
            web:"https://www.houseofsampoerna.museum/",
            imgUrl:"https://cdn1-production-images-kly.akamaized.net/hjws1UVcXEwNUeMpXqGppXQgQ30=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/764265/original/049610100_1415677850-1_kotawisataindonesia_com.jpg",
            maps:"https://www.google.com/maps/place/House+of+Sampoerna/@-7.2308173,112.7320457,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7f92141061d7f:0x41a02b3a11736c5e!8m2!3d-7.2308173!4d112.7342344"
        },
        {
            nama:"Museum De Javasche Bank",
            coordinat:[-7.23538131479879, 112.736763231448],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://www.eastjavatraveler.com/wp-content/uploads/2016/12/ejt.jpg",
            maps:"https://www.google.com/maps/place/De+Javasche+Bank/@-7.2353939,112.7345759,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7f922ef7a959d:0xddbdd454fd8f7afc!8m2!3d-7.2353939!4d112.7367646"
        },
        {
            nama:"Museum Bank Mandiri",
            coordinat: [-7.23677547839548, 112.739362006208],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://picture.triptrus.com/image/2014/06/museum-bank-mandiri.jpeg",
            maps:"https://www.google.com/maps/place/Museum+Bank+Mandiri/@-7.2353939,112.7345759,17z/data=!4m8!1m2!2m1!1sMuseum+Bank+Mandiri!3m4!1s0x2dd7f918019092a9:0x4d1e5cea1803a352!8m2!3d-7.2367856!4d112.7393593"
        },
        {
            nama:"Museum Kesehatan Dr. Adhyatma, MPH",
            coordinat: [-7.24031802189563, 112.731435693876],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://www.jejakpiknik.com/wp-content/uploads/2017/12/4-@surabayasparkling-630x380.jpg",
            maps:"https://www.google.com/maps/place/Museum+Kesehatan+Dr.+Adhyatma,+MPH/@-7.240328,112.7292423,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7f924ee526f07:0x96c9afdc7c30999d!8m2!3d-7.240328!4d112.731431"
        },
        {
            nama:"Museum Sepuluh Nopember kota Surabaya",
            coordinat: [-7.24542548574809, 112.737902625297],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://cdn0-production-images-kly.akamaized.net/k4IUuqgiPByuq5eKAfKL1G7D6VQ=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/952098/original/004985000_1439269472-MSN1.jpg",
            maps:"https://www.google.com/maps/place/Museum+Sepuluh+Nopember+kota+Surabaya/@-7.2458058,112.7356432,17z/data=!4m8!1m2!2m1!1sMuseum+Sepuluh+Nopember+kota+Surabaya!3m4!1s0x2dd7f93fea100793:0x2fa6b3da567cab1b!8m2!3d-7.2454369!4d112.7378985"
        },
        {
            nama:"Monumen Tugu Pahlawan dan Museum Sepuluh Nopember Surabaya",
            coordinat: [-7.24616191476574, 112.737763419815],
            marker_icon:DefaultIcon,
            web:"https://museumsepuluhnopember.business.site/",
            imgUrl:"https://www.eastjava.com/museum/surabaya/images/patung.jpg",
            maps:"https://www.google.com/maps/place/Tugu+Pahlawan/@-7.2461748,112.7355765,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7f93fc001bc5d:0x110e38d8a6c23fbe!8m2!3d-7.2461748!4d112.7377652"
        },
        {
            nama:"Dr. Soetomo Museum",
            coordinat: [-7.25076458333297, 112.735466163195],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://assets.kompasiana.com/items/album/2018/07/07/dscn1008-jpg-5b403d6f16835f278c1a96a4.jpg?t=o&v=760",
            maps:"https://www.google.com/maps/place/Museum+Dr.+Soetomo/@-7.2507761,112.7332653,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7f9410727e011:0x544b9a3d7ee4bfc9!8m2!3d-7.2507761!4d112.735454"
        },
        {
            nama:"Museum Hos Tjokroaminoto",
            coordinat: [-7.25252505159404, 112.737789616828],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://m.ayosurabaya.com/images-surabaya/post/articles/2020/09/14/2889/museum-hos-tjokroaminoto-e1573048234247.jpg",
            maps:"https://www.google.com/maps/place/MUSEUM+HOS+TJOKROAMINOTO/@-7.2525419,112.7355873,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7f9b178b9c013:0x58f9a33cc4dce09e!8m2!3d-7.2525419!4d112.737776"
        },
        {
            nama:"Surabaya Museum (Gedung Siola)",
            coordinat: [-7.25628598895323, 112.737994855499],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://photo.jpnn.com/arsip/watermark/2019/03/21/museum-surabaya-siola-foto-jpg.jpg",
            maps:"https://www.google.com/maps/place/Siola+Surabaya+Museum/@-7.2562972,112.7358068,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7f942c75df75b:0xc57e15b6db89588b!8m2!3d-7.2562972!4d112.7379955"
        },
        {
            nama:"Gedung Cak Durasim",
            coordinat: [-7.25690627624169, 112.739627124351],
            marker_icon:DefaultIcon,
            web:"http://cakdurasim.com/",
            imgUrl:"https://2.bp.blogspot.com/-KHAysvqQPi0/VH5DD9RMfZI/AAAAAAAAAAY/L_NmOosxZRs/s1600/gedung%2B%2Bcak%2Bdurasim%2B2.JPG",
            maps:"https://www.google.com/maps/place/Gedung+Cak+Durasim/@-7.2568377,112.7375473,17z/data=!4m8!1m2!2m1!1sGedung+Cak+Durasim!3m4!1s0x2dd7f97d349c4d7d:0xc51c4e012d92fdb8!8m2!3d-7.2569184!4d112.7396115"
        },
        {
            nama:"Balai Sahabat",
            coordinat: [-7.25659510851066, 112.739338466995],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://pesonacagarbudayasurabaya.files.wordpress.com/2013/09/dsc00831.jpg",
            maps:"https://www.google.com/maps/search/Balai+Sahabat/@-7.256425,112.7371033,17z/data=!3m1!4b1"
        },
        {
            nama:"Museum Pendidikan Surabaya",
            coordinat: [-7.2561988743387, 112.742974986362],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://cdn0-production-images-kly.akamaized.net/JulPGull6Id9O1auRQkvAp5SgeU=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2976960/original/046845300_1574668501-25_November_2019-5_ok.jpg",
            maps:"https://www.google.com/maps/place/Museum+Pendidikan+Surabaya/@-7.2562147,112.7407584,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7f9308aaf797d:0xde33a60013bfd725!8m2!3d-7.2562147!4d112.7429471"
        },
        {
            nama:"Museum WR Soepratman",
            coordinat: [-7.25065356133715, 112.753764605509],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://seringjalan.com/wp-content/uploads/2020/02/Museum-wr-supratman-1-816x544.jpg",
            maps:"https://www.google.com/maps/place/Museum+WR+Soepratman/@-7.2506354,112.7515808,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7f90a58b20643:0x228668e7ab001bd!8m2!3d-7.2506354!4d112.7537695"
        },
        {
            nama:"Museum 45",
            coordinat: [-7.2642375590107, 112.74558291409],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://upload.wikimedia.org/wikipedia/id/d/d0/Gedung_Joang_45.jpg",
            maps:"https://www.google.com/maps/place/Museum+45/@-7.250634,112.7187499,13z/data=!4m8!1m2!2m1!1sMuseum+45!3m4!1s0x2dd7f963d2d4fb4d:0xcc61646ea93f1c27!8m2!3d-7.2642396!4d112.7455788"
        },
        {
            nama:"Indonesian Cancer Museum",
            coordinat: [-7.26747489630225, 112.74893279783],
            marker_icon:DefaultIcon,
            web:"https://www.museumkankerindonesia.com/",
            imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/13/0d/47/ed/20180429-161038-largejpg.jpg",
            maps:"https://www.google.com/maps/place/Museum+Kanker+Indonesia/@-7.2674818,112.7467432,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7fbd845205963:0xe6aedcbbded07054!8m2!3d-7.2674818!4d112.7489319"
        },
        {
            nama:"Museum dan Pusat Kajian Etnografi UNAIR",
            coordinat: [-7.2724582515584, 112.759536078905],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://statik.tempo.co/data/2017/03/30/id_594228/594228_620.jpg",
            maps:"https://www.google.com/maps/place/Museum+dan+Pusat+Kajian+Etnografi+UNAIR/@-7.2724664,112.7573485,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7fbd41261934f:0xe258fac5ac2188a6!8m2!3d-7.2724664!4d112.7595372"
        },
        {
            nama:"Blockbuster Museum Surabaya",
            coordinat: [-7.24774869900311, 112.779572402716],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"http://www.julajuli.com/upload/media/entries/2019/10/191026103104_julajuli.jpg",
            maps:"https://www.google.com/maps/place/Blockbuster+Museum+Surabaya/@-7.2477541,112.777384,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7f92a3fda62c3:0x571a8893dca24a3c!8m2!3d-7.2477541!4d112.7795727"
        },
        {
            nama:"De Mata Trick Eye Museum",
            coordinat: [-7.29429211383448, 112.729665131734],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://images.solopos.com/2013/12/221213-Harian-Jogja-Wahana-3-Dimensi-01.jpg",
            maps:"https://www.google.com/maps/place/De+Mata+Trick+Eye+Museum+(Closed)/@-7.2943024,112.7274721,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7fb91a3edbe31:0xd2352bdfdf2eb060!8m2!3d-7.2943024!4d112.7296608"
        },
        {
            nama:"Museum Nahdlatul Ulama",
            coordinat: [-7.33830202050297, 112.723792225029],
            marker_icon:DefaultIcon,
            web:"",
            imgUrl:"https://storage.nu.or.id/storage/post/16_9/mid/1575796216.jpg",
            maps:"https://www.google.com/maps/place/Nahdlatul+Ulama+Museum/@-7.33831,112.7215949,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7fb508223f375:0x33ca3810ad3ad698!8m2!3d-7.33831!4d112.7237836"
        }
    ]
};

function Maps(props){
    const [state,setState] = useState(data);
    var myMap;
    var loop = 0;

    const clickHandeler = (event,index)=>{ 
        const cameraCoordinat = state.items[index].coordinat;

        var i;
        for(i=0;i<state.items.length;i++){
            state.items[i].marker_icon=DefaultIcon;
        }

        console.log(state.coordinat);
        state.items[index].marker_icon=SelectedIcon;
        setState({...state,coordinat:cameraCoordinat});
        myMap.flyTo(cameraCoordinat,15)
    }
    const clickListener=()=>{
        if(loop===0){
            document.getElementById("rootHolder").style.height="60vh";
            loop+=1;
        }else{
            document.getElementById("rootHolder").style.height="0vh";
            loop-=1;
        }
    }
    const goToWebSIte=(event,data)=>{
        if(data!==""){
            var win = window.open(data, '_blank');
            win.focus();
        }
    }
    const goToMaps=(event,data)=>{
        var win = window.open(data, '_blank');
        win.focus();
    }
    return(
        <div>
            <div className="LogoHolder">
                <div className="LogoContainer" onClick={clickListener}>
                    <AiOutlineMenu className="Logooutline"/>
                    <img src={AppLogo} alt="Logo Holder"/>
                </div>
                <div className="gridHolder">
                    <GridList className="root"  id="rootHolder" cols={1} spacing={10}>
                        {state.items.map((value,index) => (
                            <GridListTile onClick={(event) => clickHandeler(event, index)} className="GridListTitleHolder">
                                <img src={value.imgUrl} alt=""/>
                                <GridListTileBar 
                                title={value.nama}
                                actionIcon={
                                    <IconButton >
                                       <MdKeyboardArrowRight fill="#ffff" onClick={(event)=>goToWebSIte(event,value.web)}/>
                                    </IconButton>
                                  }
                                />
                          </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
            <MapContainer center={state.coordinat} zoom={13} scrollWheelZoom={true} 
            zoomControl={false} animate={true} className="MapHolder">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">GISUM OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position="topright"/>
                {
                    state.items.map((item)=>
                        <Marker position={item.coordinat} icon={item.marker_icon}>
                            <Popup className="PopUpContainer">
                                <p>{item.nama}</p>
                                <Button onClick={(event)=>goToMaps(event,item.maps)} 
                                size="small"  variant="outlined"
                                color="primary" endIcon={<MdKeyboardArrowRight/>}>Jalan Kesana</Button>
                            </Popup>
                        </Marker>
                    )
                }
                <MapConsumer>
                    {(map) => {
                        myMap = map;
                        return null
                    }}
                </MapConsumer>
                <LocationMarker/>
            </MapContainer>
        </div>
    )
}
export default  Maps;