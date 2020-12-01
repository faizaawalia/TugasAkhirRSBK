import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
background-color: #F5F5F5;
border-radius: 20px;
box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
color: #B3B8CD;
position: relative;

width: 80%;
margin: auto;
margin-top: 150px;
@media screen and (max-width: 500px) {
       margin: auto;
}
`
const Image = styled.img`

  border: 1px solid #03bfcb;
  border-radius: 10%;
  padding: 7px;
  width: 70%;
  height: 10%;
  margin: 20px;
  
`
const Title = styled.h5`
  margin: auto;
  color:black;
  font-size:1vw
`

const Penjelasan = styled.div`
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .2em 1em;
	width: 80%;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .7em;
	appearance: none;
	background-color: #fff;
	
	
    margin: auto
`

const Rowcard = styled.div
    `
    display: table;
    width: 100%;
    table-layout: fixed;
    border-spacing: 3px;
    text-align: center;
`

const ColumnCard = styled.div
    `
    display: table-cell;
    text-align: center;
  

`

function CardInfo(props) {
    return (
        <div>
            <Image src={props.src} /><br />
            <a>{props.nama}</a><br />
            <a>{props.keterangan}</a>
        </div>

    )
}



export default function index() {
    return (

        <Rowcard>

            <ColumnCard>
                <Container>
                    <Title>
                        <CardInfo nama="JAMBU" keterangan="Buah yang aku maauuuu" src="https://www.linkpicture.com/q/Jambu1.jpg" />
                    </Title>
                    <Penjelasan>
                        <p>"Jika Anda mengalami demam berdarah, tidak asing lagi pasti jambu yang dianjurkan untuk Anda.
                        Buah yang banyak ditemukan di Indonesia ini merupakan buah tropis yang lezat dan kaya akan zat gizi lho.
                        Menambahkan buah jambu ke dalam menu makanan Anda sehari-hari merupakan pilihan cerdas untuk menjaga kesehatan.
                        Sedangkan untuk daun jambu biji putih sendiri memiliki kandungan zat yang juga sangat bermanfaat,
                        seperti minyak atsiri, asam ursolat, asam psidiolat, asam kratogolat, asam oleanolat, asam guajaverin dan vitamin.
                        Maka dari itu, buah jambu biji putih memiliki manfaat bagi kesehatan yang jelas sudah terbukti ampuh
                            untuk mengatasi berbagai masalah kesehatan serta bermanfaat untuk kecantikan kulit wajah Anda."</p>
                    </Penjelasan>
                </Container>
            </ColumnCard>

            <ColumnCard>
                <Container>
                    <Title>
                        <CardInfo nama="NAGA" keterangan="Buah gaada rasa pelepas dahaga" src="https://www.linkpicture.com/q/Naga_1.jpg" />
                    </Title>
                    <Penjelasan>
                        <p>"Buah naga atau pitaya adalah buah yang hanya tumbuh di daerah tropis dan subtropis seperti di Amerika Selatan dan Asia. Seperti namanya,
                        kulit buah naga ini menyerupai sisik naga yang merupakan hewan mitos. Tanaman ini dianggap sebagai tanaman kaktus yang penuh nutrisi.
                        Buah yang unik ini mengandung sekitar 60 kalori yang masing-masing kaya akan vitamin C, B1, B2, dan B3, serta mineral seperti zat besi, kalsium, dan fosfor.
                            Dan itu diperkirakan belum semuanya. Ini jelas sekali bahwa buah naga merupakan buah terbaik yang mudah kita dapatkan di Indonesia."</p>
                    </Penjelasan>
                </Container>
            </ColumnCard>

            <ColumnCard>
                <Container>
                    <Title>
                        <CardInfo nama="SIRSAK" keterangan="Buah yang enaaaaakk" src="https://www.linkpicture.com/q/Sirsak.png" />
                    </Title>
                    <Penjelasan>
                        <p>"Sirsak merupakan buah yang tinggi serat dan juga vitamin C, namun kandungan kalorinya rendah.
                            Selain kandungan itu, sirsak kaya akan kandungan antioksidan yang bisa menangkal radikal bebas. Karenanya, diyakini bahwa manfaat sirsak salah satunya adalah menurunkan risiko terkena kanker, diabetes, dan melawan infeksi."</p>
                    </Penjelasan>
                </Container>
            </ColumnCard>

        </Rowcard>

    );

}

