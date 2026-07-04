
const profiles = [
  {
    name: "राहुल पाटील",
    district: "पुणे",
    education: "B.E.",
    age: 28
  },
  {
    name: "प्रिया शिंदे",
    district: "नाशिक",
    education: "M.Com",
    age: 25
  },
  {
    name: "अमोल देशमुख",
    district: "औरंगाबाद",
    education: "B.Sc",
    age: 30
  }
];

function searchProfiles() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("results");

  results.innerHTML = "";

  const filtered = profiles.filter(profile =>
    profile.name.toLowerCase().includes(input) ||
    profile.district.toLowerCase().includes(input) ||
    profile.education.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    results.innerHTML = "<p>कोणतेही प्रोफाइल सापडले नाही.</p>";
    return;
  }

  filtered.forEach(profile => {
    results.innerHTML += `
      <div class="profile-card">
        <h3>${profile.name}</h3>
        <p><strong>जिल्हा:</strong> ${profile.district}</p>
        <p><strong>शिक्षण:</strong> ${profile.education}</p>
        <p><strong>वय:</strong> ${profile.age}</p>
      </div>
    `;
  });
}
