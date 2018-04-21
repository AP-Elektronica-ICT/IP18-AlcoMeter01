import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  lineChart:any;

  constructor(public fb: FirebaseProvider, public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');
    const loading: Loading = this.loadingCtrl.create();
    loading.present();
    this.showChart(loading);
  }
  
  async showChart(loading: Loading){
    var promille = [];
    var beschrijving = [];

    await this.fb.getMeasurements().then(meting => {

      meting.forEach(element => {
        promille.push(element.promille);
        beschrijving.push(element.beschrijving);
      });
      console.log(promille);
    }).then(() => {
      loading.dismiss();
      this.lineChart = new Chart(document.getElementById('lineChart'), {
  
        type: 'line',
        data: {
            labels:beschrijving,
            datasets: [
                {
                    label: "Alcohol promille",
                    backgroundColor: "rgba(75,192,192,0.0)",
                    borderColor: "rgba(75,192,192,1)",
                    borderWidth: 2,
                    pointRadius: 3,
                    pointhoverRadius: 5,
                    pointHoverBackgroundColor: 'rgb(255, 204, 0)',
                    pointBackgroundColor: 'white',
                    pointHitRadius: 10,
                    spanGaps: true,
                    lineTension: 0.3,
                    data: promille
                }
            ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                display: false,
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero:true
              },
              
            }]
            
          }
        }
  
      });
    });
      
  }
}
