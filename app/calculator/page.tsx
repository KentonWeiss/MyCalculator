import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-gray">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-gray dark:bg-gray sm:items-start">
        <Box
          sx={{
            width: 400,
            height: 500,
            borderRadius: 1,
            bgcolor: 'black',
          }}
        />
      </main>
    </div>
  );
}
