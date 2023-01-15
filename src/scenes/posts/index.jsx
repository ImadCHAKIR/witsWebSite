import { Box, Typography, useTheme,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { posts } from "../../data/Data";
import Header from "../../components/admin/Header";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Posts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns =[
    { field: "id", headerName: "ID" },
    {
      field: "username",
      headerName: "UserName",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "title",
      headerName: "Article Title",
      flex: 1,
    },
    {
      field: "domain",
      headerName: "Domain",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "Delete",
      headerName: "Delete",
      flex: 1,
      renderCell: () => {
        return (
          <Button
            color="error"
            variant="contained"
          >
            <DeleteForeverIcon />
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              Delete
            </Typography>
          </Button>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Posts" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={posts} columns={columns} />
      </Box>
    </Box>
  );
};

export default Posts;
