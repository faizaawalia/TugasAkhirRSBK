import React, { useEffect, useState, useContext, useReducer, useMemo } from "react";
import "./Buah.css";

//penggunaan useReducer
const initialTroli = 0

const reducer = (troli, tambahTroli) => {
    switch (tambahTroli) {
        case 'tambah': return troli + 1
        default: return troli
    }
}

//penggunaan useContext
const CartContext = React.createContext();

const Buah = () => {
    const [stock, setStock] = useState(50);
    const [disabled, setDisabled] = useState(false);
    const [status, setStatus] = useState("Beli Sekarang");
    const [keranjang, setKeranjang] = useState(0);
    const [showGambar, setShowGambar] = useState(true);
    const [count, dispatch] = useReducer(reducer, initialTroli)

    //Penggunaan dengan useMemo
    const hideGambar = useMemo(() => {
        return {
            display: showGambar ? 'flex' : 'none'
        }
    }, [showGambar])


    //penggunaan useEffect
    useEffect(() => {
        if (stock > -1 && stock < 10) {
            alert(`Peringatan dengan useEffect! Pembelian berhasil`);
        }
    }, [stock]);

    //pengubahan state dengan useState, & fungsi button tidak bisa dikurangi lagi barangnya
    const tombolBeli = () => {
        setStock(stock - 1);
        if (stock === 1) {
            setDisabled(true);
            setStatus("Habis");
        }

    }


    //tampilan yang muncul
    return (
        <CartContext.Provider value={{ keranjang, setKeranjang }}> {/*mengambil value dari pembuatan konteks*/}
            <div className="Main">
                <br></br>
                <img className="ViewImage"
                    style={hideGambar}
                    src="https://www.linkpicture.com/q/fruity.jpg">
                </img>
                {/* Render useMemo */}
                <p></p>
                <button className="Button1" onClick={() => setShowGambar(prevShowGambar => !prevShowGambar)}> Tampilan Gambar dengan useMemo
                </button>
                <p>(menampilkan gambar)</p>
                <br></br>
                <img className="ViewImage"
                    style={hideGambar}
                    src="https://www.linkpicture.com/q/Pisang.jpg"
                    alt="" />
                {/* Render useState yang mempengaruhi useEffect */}
                <p></p>
                <button className="Button2" onClick={tombolBeli} disabled={disabled}>{status}</button>
                <p>(Pembelian dengan useState)</p>
                <p className="Text">Stock Buah : {stock}</p>
                {/* manggil Render useContext */}
                <TambahKeranjang /> {/*manggil fungsi tambah keranjang*/}
                <p>(fungsi penambahan dengan useContext)</p>
                <h1>{keranjang}</h1>
                {/* Render useReducer */}
                <button className="Button3" onClick={() => dispatch('tambah')}>Tambah Keranjang <i className="fa fa-shopping-cart"></i></button>
                <p>(fungsi penambahan dengan useReducer)</p>
                <h1>{count}</h1>
            </div>
        </CartContext.Provider>
    )
}

//fungsi untuk menjalankan useContext
function TambahKeranjang() {
    const { keranjang, setKeranjang } = useContext(CartContext);
    const tombolKeranjang = () => {
        setKeranjang(keranjang + 1);
    }
    return (
        <button
            className="Button4" onClick={tombolKeranjang}
        >Tambah Keranjang
            <i className="fa fa-shopping-cart"></i></button>
    );
}

export default Buah