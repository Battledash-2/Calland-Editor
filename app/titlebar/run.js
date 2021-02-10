document.querySelector('#run').onclick = ()=>{
    const command = "cd "+ path + "\n" + document.querySelector('.editor').innerText.replace(/\n/gmi, " && ");
    console.log("Running '"+command.replace(/\n/gmi, "")+"'");
    require('child_process').exec(command.replace(/\n/gmi, ""), (err, stdout, stderr)=>{
        document.querySelector("#stdout").style.display = "block";
        document.querySelector("#stdout_content").innerText = stdout;
    });
};
document.querySelector("#close_std").onclick = ()=>{
    document.querySelector("#stdout").style.display = "none";
    document.querySelector("#stdout_content").innerText = "No Output.";
};