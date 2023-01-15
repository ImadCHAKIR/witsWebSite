import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/admin/Header";
import { useState } from "react";
import { witsHTTPSettings } from '../../data/witsHTTPSettings';
import { useFetch } from "../../hooks";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Categories = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [accessLevel,setAccessLevel] = useState('');
  const sections = useFetch(witsHTTPSettings.sections)

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleChangeAccessLevel = (event) => {
    setAccessLevel(event.target.value);
  };

  const handleDelete = (event) =>{
    console.log(event)
  }

  return (
    <Box m="20px">
      <Header title="CREATE MEMBER" subtitle="Create a New Member Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="New Categories"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ctegory}
                name="ctegory"
                error={!!touched.ctegory && !!errors.ctegory}
                helperText={touched.ctegory && errors.ctegory}
                sx={{ gridColumn: "span 2" }}
              />

              <Button type="submit" color="secondary" variant="contained">
                Create New Category
              </Button>

            </Box>
            <Stack direction="row" sx={{flexWrap:"wrap",justifyContent:"space-around",mx:2,my:5}} spacing={1}>              
            {sections.data.map((section)=>{
                return <Chip label={section.title} variant="outlined" onDelete={handleDelete} sx={{my:2}}/>
              })}
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  category: yup.string().required("required"),
});
const initialValues = {
  category: "",
};

export default Categories;
