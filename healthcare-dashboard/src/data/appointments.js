export const calendarAppointments = {
  '2021-10-25': ['10:00'],
  '2021-10-26': ['08:00', '12:00'],
  '2021-10-27': ['10:00'],
  '2021-10-28': ['10:00'],
  '2021-10-29': ['12:00', '14:00'],
  '2021-10-30': ['11:00', '14:00', '16:00'],
  '2021-10-31': ['15:00']
};

export const appointmentDetails = [
  {
    id: 'dentist-1',
    type: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: '🦷',
    color: '#5B5FED'
  },
  {
    id: 'physio-1',
    type: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: '🏃',
    color: '#FFE8D6'
  }
];

export const upcomingAppointments = {
  thursday: [
    {
      id: 'health-checkup',
      title: 'Health checkup complete',
      time: '11:00 AM',
      icon: '💉',
      iconBg: '#E8F5E9',
      iconColor: '#4CAF50'
    },
    {
      id: 'ophthalmologist',
      title: 'Ophthalmologist',
      time: '14:00 PM',
      icon: '👁️',
      iconBg: '#F3E5F5',
      iconColor: '#9C27B0'
    }
  ],
  saturday: [
    {
      id: 'cardiologist',
      title: 'Cardiologist',
      time: '12:00 AM',
      icon: '❤️',
      iconBg: '#FFEBEE',
      iconColor: '#F44336'
    },
    {
      id: 'neurologist',
      title: 'Neurologist',
      time: '16:00 PM',
      icon: '👨‍⚕️',
      iconBg: '#E3F2FD',
      iconColor: '#2196F3'
    }
  ]
};

export const activityData = {
  weeklyAppointments: 3,
  chartData: [
    { 
      day: 'Mon', 
      bars: [
        { value: 45, type: 'primary' },
        { value: 65, type: 'secondary' },
        { value: 30, type: 'primary' }
      ]
    },
    { 
      day: 'Tues', 
      bars: [
        { value: 80, type: 'primary' },
        { value: 55, type: 'secondary' },
        { value: 40, type: 'primary' }
      ]
    },
    { 
      day: 'Wed', 
      bars: [
        { value: 35, type: 'primary' },
        { value: 70, type: 'secondary' },
        { value: 50, type: 'primary' }
      ]
    },
    { 
      day: 'Thurs', 
      bars: [
        { value: 60, type: 'primary' },
        { value: 45, type: 'secondary' },
        { value: 75, type: 'primary' }
      ]
    },
    { 
      day: 'Fri', 
      bars: [
        { value: 85, type: 'primary' },
        { value: 40, type: 'secondary' },
        { value: 55, type: 'primary' }
      ]
    },
    { 
      day: 'Sat', 
      bars: [
        { value: 50, type: 'primary' },
        { value: 65, type: 'secondary' },
        { value: 35, type: 'primary' }
      ]
    },
    { 
      day: 'Sun', 
      bars: [
        { value: 70, type: 'primary' },
        { value: 45, type: 'secondary' },
        { value: 60, type: 'primary' }
      ]
    }
  ]
}; 