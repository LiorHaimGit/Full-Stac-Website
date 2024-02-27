document.addEventListener("DOMContentLoaded", function() {
    const navigation = `
        <div class="links">
            <a href="/">
                <img src="/images/home_icon.png" alt="Home">
                <span>Home</span>
            </a>
            <a href="/about">
                <img src="/images/about_icon.png" alt="My Story">
                <span>My Story</span>
            </a>
            <a href="/resume">
                <img src="/images/resume_icon.png" alt="Resume">
                <span>Resume</span>
            </a>
            <a href="/contact">
                <img src="/images/envelop_icon.png" alt="Contact">
                <span>Contact</span>
            </a>
            <a href="https://www.linkedin.com/in/liorhaim/" target="_blank">
                <img src="/images/linkedin_icon_dark2.png" alt="LinkedIn">
                <span>LinkedIn</span>
            </a>
            <a href="https://github.com/LiorHaimGit/" target="_blank">
                <img src="/images/github_icon_dark.png" alt="GitHub">
                <span>GitHub</span>
            </a>
        </div>
    `;
    
    document.getElementById("navigation").innerHTML = navigation;
});
