export interface MachineState{
  temperature: number; //grados celcius
  rpm: number; // Revoluciones por minuto
  status: 'RUNNING' | 'STOPPED' | 'ERROR';
}
