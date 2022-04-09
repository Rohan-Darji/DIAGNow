const Doctor = {
  name: "Prajwal Jaiswal",
  username: "doctor",
  password: "doctor123",
  qualifications: "MBBS, MD", 
  hospital: "Seven Star Hospital" 
}

export const getDoctor = (req, res) => {
  res.send("This is the getDoctor route")
}

export const doctorLogin = (req, res) => {
  res.send("This is the doctorLogin route")
}

export const doctorLogout = (req, res) => {
  res.send("This is the doctorLogout route")
}