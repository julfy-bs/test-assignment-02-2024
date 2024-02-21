import './styles/main.css';
import Popup from './components/Popup.js';
import { EVENT } from './components/utils/enum.js';

document.addEventListener('DOMContentLoaded', () => {
  const popup = new Popup('.modal');
  popup.setEventListeners();
  const nodes = document.querySelectorAll('.user-panel__item');
  const doughnut = document.querySelector('#doughnut');
  nodes.forEach((node) => node.addEventListener(EVENT.MOUSEDOWN, () => popup.open()));

  const data = {
    labels: [
      'Александра',
      'Владимир',
      'Тимур',
      'Ангелина Сейт',
      'Денис'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [55, 5, 10, 20, 10],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(254, 12, 35)',
        'rgb(154, 62, 23)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
  };

  new Chart(doughnut, config);
});
