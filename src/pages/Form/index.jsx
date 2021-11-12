import {
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { FormWrapper } from "./styled";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import styles from "./Form.module.css";

const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
        theme.palette.mode === "dark"
            ? "0 0 0 1px rgb(16 22 26 / 40%)"
            : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
    backgroundImage:
        theme.palette.mode === "dark"
            ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
            : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2,
    },
    "input:hover ~ &": {
        backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
    },
    "input:disabled ~ &": {
        boxShadow: "none",
        background:
            theme.palette.mode === "dark"
                ? "rgba(57,75,89,.5)"
                : "rgba(206,217,224,.5)",
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#137cbd",
    backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
        display: "block",
        width: 16,
        height: 16,
        backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
        content: '""',
    },
    "input:hover ~ &": {
        backgroundColor: "#106ba3",
    },
});

// Inspired by blueprintjs
function BpRadio(props) {
    return (
        <Radio
            sx={{
                "&:hover": {
                    bgcolor: "transparent",
                },
            }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}

export default function Form() {
    const [formInfo, setFormInfo] = useState({
        email: "",
        name: "",
        skills: [],
        gender: "male",
    });
    const [skillVal, setSkillVal] = useState({
        css: false,
        javascript: false,
        react: false,
        figma: false,
    });
    const [errors, setErrors] = useState({
        email: false,
        name: false,
        skills: false,
    });
    const [emailErr, setEmailErr] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [skillsErr, setSkillsErr] = useState(false);

    useEffect(() => {
        const selectedSkills = Object.keys(skillVal).filter(
            (skill) => skillVal[skill]
        );
        setFormInfo({ ...formInfo, skills: selectedSkills });
    }, [skillVal]);

    const handleOnChange = (e, key) => {
        setFormInfo({ ...formInfo, [key]: e.target.value });
    };

    const handleOnSkillChange = (e) => {
        setSkillVal({ ...skillVal, [e.target.name]: e.target.checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (
            formInfo.email !== "" &&
            formInfo.name !== "" &&
            formInfo.skills.length !== 0
        ) {
            setEmailErr(false);
            setNameErr(false);
            setSkillsErr(false);
            console.log(formInfo);
        } else {
            if (formInfo.email === "") { 
                setEmailErr(true);
            } else {
                setEmailErr(false);
            }

            if (formInfo.name === "") {
                setNameErr(true);

            } else {
                setNameErr(false);

            }

            if (formInfo.skills.length === 0) {
                setSkillsErr(true);

            } else {
                setSkillsErr(false);

            }
        }
    };

    return (
        <FormWrapper maxWidth="sm">
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item sm={12}>
                        <FormLabel component="legend" colors="error">
                            Email Address
                        </FormLabel>
                        <TextField
                            type="email"
                            size="small"
                            onChange={(e) => handleOnChange(e, "email")}
                            fullWidth
                        />
                        {emailErr && (
                            <label>
                                <small className={styles.error}>
                                    Email field is required.
                                </small>
                            </label>
                        )}
                    </Grid>
                    <Grid item sm={12}>
                        <FormLabel component="legend">Name</FormLabel>
                        <TextField
                            type="text"
                            size="small"
                            onChange={(e) => handleOnChange(e, "name")}
                            fullWidth
                        />
                        {nameErr && (
                            <label>
                                <small className={styles.error}>
                                    Name field is required.
                                </small>
                            </label>
                        )}
                    </Grid>
                    <Grid item sm={12}>
                        <FormLabel component="legend">Skills</FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="css"
                                        onChange={(e) => handleOnSkillChange(e)}
                                    />
                                }
                                label="Css"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="javascript"
                                        onChange={(e) => handleOnSkillChange(e)}
                                    />
                                }
                                label="Javascript"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="react"
                                        onChange={(e) => handleOnSkillChange(e)}
                                    />
                                }
                                label="React"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="figma"
                                        onChange={(e) => handleOnSkillChange(e)}
                                    />
                                }
                                label="Figma"
                            />
                        </FormGroup>
                        {skillsErr && (
                            <label>
                                <small className={styles.error}>
                                    Skills field is required.
                                </small>
                            </label>
                        )}
                    </Grid>
                    <Grid item sm={12}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            defaultValue="male"
                            aria-label="gender"
                            name="customized-radios"
                            row
                            onChange={(e) => handleOnChange(e, "gender")}
                        >
                            <FormControlLabel
                                value="male"
                                control={<BpRadio />}
                                label="Male"
                            />
                            <FormControlLabel
                                value="female"
                                control={<BpRadio />}
                                label="Female"
                            />

                            <FormControlLabel
                                value="other"
                                control={<BpRadio />}
                                label="Other"
                            />
                        </RadioGroup>
                    </Grid>
                    <Grid item>
                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </Grid>
                </Grid>
            </form>
            
        </FormWrapper>
    );
}
