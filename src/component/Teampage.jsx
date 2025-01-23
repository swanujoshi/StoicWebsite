import React, { useState, useEffect } from "react";
import "./Team.css";

function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    imageData: "",
  });
  const [preview, setPreview] = useState("");

  // Fetch all team members from the backend on component mount
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/auth/allMember"
        );

        const data = await response.json();
        console.log(data);
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };
    fetchTeamMembers();
  }, []);

  const handleAddMember = () => setShowPopup(true);

  const handleClosePopup = () => {
    setShowPopup(false);
    setNewMember({ name: "", role: "", imageData: "" });
    setPreview("");
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageData") {
      const file = files[0];
      setNewMember((prev) => ({ ...prev, imageData: file }));
      setPreview(URL.createObjectURL(file)); // Preview the uploaded imageData
    } else {
      setNewMember((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    if (newMember.name && newMember.role && newMember.imageData) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageData = reader.result.split(",")[1]; // Extract Base64 string without the prefix

        const newMemberWithimageData = {
          name: newMember.name,
          role: newMember.role,
          imageData, // Base64-encoded image
        };

        // Call the API to add a new profile
        try {
          const response = await fetch(
            "http://localhost:8080/api/auth/addMember",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newMemberWithimageData),
            }
          );
          console.log(response.data);

          if (response.ok) {
            const addedMember = await response.json();
            setTeamMembers((prev) => [...prev, addedMember]); // Update state with the new member
            handleClosePopup();
          } else {
            alert("Error adding member.");
          }
        } catch (error) {
          console.error("Error submitting the new member:", error);
        }
      };
      reader.readAsDataURL(newMember.imageData); // Convert image to Base64
    } else {
      alert("Please fill out all fields and upload a imageData.");
    }
  };

  return (
    <section className="team-page">
      <div className="container">
        <h2>
          Explore our <span>Team</span>
        </h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img
                src={`data:image/jpeg;base64,${member.data}`}
                alt={member.name}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        <button className="add-member-button" onClick={handleAddMember}>
          Add Member
        </button>

        {showPopup && (
          <div className="popup-form">
            <div className="popup-content">
              <h3>Add New Member</h3>
              <div className="form-field">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={newMember.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <label>role:</label>
                <input
                  type="text"
                  name="role"
                  placeholder="Enter role"
                  value={newMember.role}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <label>imageData:</label>
                <input
                  type="file"
                  name="imageData"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-buttons">
                <button onClick={handleClosePopup}>Cancel</button>
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default TeamPage;
