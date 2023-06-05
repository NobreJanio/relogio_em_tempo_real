function updateTime() {
    var now = new Date();
  
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    var timeString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);
    document.getElementById('clock').innerHTML = timeString;
  
    var temperature = getTemperature(); // Função para obter a temperatura atual
    document.getElementById('temperature').innerHTML = 'Temperatura: ' + temperature + '°C';
  
    var dateString = now.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('date').innerHTML = dateString;
  }
  
  function addZeroBefore(number) {
    return number < 10 ? '0' + number : number;
  }
  
  function getTemperature() {
    // Implemente aqui a lógica para obter a temperatura atual, seja de uma API externa ou de outro dispositivo/sensor
    // Por exemplo:
    var temperature = 25; // Temperatura fixa para exemplo
    return temperature;
  }
  
  setInterval(updateTime, 1000); // Atualiza o relógio a cada segundo
  