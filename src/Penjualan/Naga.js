import React, { Component } from 'react';

import '../Penjualan/style2.css';


export default class Naga extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: 3,
            nama: this.props.nama,
            harga: this.props.harga,
            status: "Beli",
            disabled: false
        }
    }
    TombolBeli = () => {
        this.setState({
            stock: this.state.stock - 1
        })

        if (this.state.stock === 1) {
            this.setState({
                status: "Habis",
                disabled: true,

            })

        } else {

        }

    }
    //jika state berubah maka componnen diupdate akan dipanggil
    componentDidUpdate(prevState) {
        alert(`Pembelian Berhasil`)
    }
    //konfirmasi apakah komponen harus diupdate/tidak (jika ingin beli barang)    
    shouldComponentUpdate(nextState) {
        return window.confirm('Anda yakin membeli barang ini?');
    }


    render() {
        return (
            <div className="wrapper">
                <h1><b>Naga</b></h1>
                <h2>{this.props.nama}</h2>
                <img src="https://www.linkpicture.com/q/Naga_1.jpg" alt="" />
                <p><b>Rp. {this.props.harga}</b></p>
                <p>Jumlah Stock : {this.state.stock}</p>
                <button className="Button1" onClick={this.TombolBeli} disabled={this.state.disabled}>{this.state.status}</button>
                <p>{this.state.status}</p>

            </div>

        )
    }
}

