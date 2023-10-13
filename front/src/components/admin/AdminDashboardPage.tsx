import AdminLayout from "@components/admin/AdminLayout.tsx";
import { Title } from "@components/styled/Title.ts";
import useSWR from "swr";
import { fetcher } from "@/helpers/api";
import styled from "styled-components";
  
type Participant = {
  email: string;
  code: string;
};

const ParticipantContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const ParticipantsActionsContainer = styled.div`
  display: flex;
  gap: 10rem;
`;

const ParticipantRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const AdminDashboardPage = () => {
  const {
    data: participants,
    isLoading,
    error,
  } = useSWR("/participants/completed-and-verified", fetcher);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isLoading && error) {
    return <p>Error</p>;
  }

  const getRandomParticipant = () => {
    const randomIndex = Math.floor(Math.random() * participants.length);
    const randomParticipant = participants[randomIndex];
    alert(
      `Le gagnant est ${randomParticipant.email} avec le code ${randomParticipant.code}`
    );
  };

  return (
    <AdminLayout>
      <ParticipantContainer>
        <ParticipantsActionsContainer>
          <Title>Participants ayant validé leur code</Title>
          <button onClick={getRandomParticipant}>Participant gagnant</button>
        </ParticipantsActionsContainer>

        {participants.map((participant: Participant) => {
          return (
            <ParticipantRow key={participant.email}>
              <p>{participant.email}</p>
              <p>{participant.code}</p>
            </ParticipantRow>
          );
        })}
      </ParticipantContainer>
    </AdminLayout>
  );
};

export default AdminDashboardPage;
