import React, { Component } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
   IonIcon,
  IonItem,
  IonList,
  IonRow,
  IonCol,IonInput,IonSelect,IonSelectOption,IonButton, IonApp, 
} from '@ionic/react';

class CryptoConverter extends Component {
  state = {
    currencies: ["BTC", "ETH", "XRP", "BCH", "USDT"],
    base: "BTC",
    amount: "",
    convertTo: "ETH",
    result: "",
    date: ""
  };

  handleSelect = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = e => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
        date: null
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      fetch(`https://rest.coinapi.io/v1/exchangerate/${this.state.base}/${this.state.convertTo}`,{
        headers: {
            'X-CoinAPI-Key':'C93219A8-A3B9-4DC2-8939-977AAB0B89D8',
              }})
        .then(res => res.json())
        .then(data => {
            console.log(data);
          const date = data.time.slice(0,10);
          const result = (data.rate * amount).toFixed(10);
          this.setState({
            result,
            date
          });
        });
    }
  };

  handleSwap = e => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calculate
    );
  };
  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
      <IonApp>
          <IonRow>
                <IonCol> 
                  <IonCard>
                      <IonCardHeader>
                          <IonCardTitle> Converter</IonCardTitle>
                      </IonCardHeader>
                      <IonCard>

                        <IonCardHeader>
                          <IonCardSubtitle>{amount} {base} is equevalent to</IonCardSubtitle>
                          <IonCardTitle>{amount === ""
                                ? "0"
                                : result === null
                                ? "Calculating..."
                                : result}{" "}
                              {convertTo}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                        <p>As of {amount === "" ? "/ / /" : date === null ? "" : date}</p>
                        </IonCardContent> 
                        </IonCard>
                        
                      <IonCardContent>
                        <IonInput type="number" value={amount} placeholder="0" onIonChange={this.handleInput} ></IonInput>
                        <IonList>
                          <IonItem>
                            <IonSelect name="base"
                                  value={base}
                                  onIonChange={this.handleSelect}>
                                  {currencies.map(currency => (
                                <IonSelectOption key={currency} value={currency}>
                                    {currency}
                                </IonSelectOption>
                                ))}
                            </IonSelect>
                          </IonItem>
                        </IonList>
                      </IonCardContent>
                      <IonCardContent>
                        <IonInput disabled={true}
                                value={
                                  amount === ""
                                    ? "0"
                                    : result === null
                                    ? "Calculating..."
                                    : result
                                } ></IonInput>
                        <IonList>
                          <IonItem>
                            <IonSelect name="convertTo"
                                value={convertTo}
                                onIonChange={this.handleSelect} cancelText="Dismiss">
                                  {currencies.map(currency => (
                                <IonSelectOption key={currency} value={currency}>
                                    {currency}
                                </IonSelectOption>
                                ))}
                            </IonSelect>
                          </IonItem>
                        </IonList>
                      </IonCardContent>
                      <IonCardContent>
                      <IonButton onIonClick={this.handleSwap}>
                          <IonIcon icon="swap"/>
                      </IonButton>
                      </IonCardContent>
                    </IonCard>
                </IonCol>
          </IonRow>
    </IonApp>
    );
  }
}

export default CryptoConverter;
