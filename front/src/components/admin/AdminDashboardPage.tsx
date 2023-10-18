import AdminLayout from "@components/admin/AdminLayout.tsx";
import { Title } from "@components/styled/Title.ts";
import useSWR from "swr";
import { fetcher } from "@/helpers/api";
import styled from "styled-components";
import { ContinueButton } from "@components/styled/ContinueButton.ts";

type Participant = {
  email: string;
  code: string;
};

const ParticipantContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ParticipantRow = styled.div`
  display: flex;
  gap: 10px;
  color: white;
  margin-left: 20px;
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
      `Le gagnant est ${randomParticipant.email} avec le code ${randomParticipant.code}`,
    );
  };

  return (
    <AdminLayout>
      <ParticipantContainer>
        <Title>
          Participants ayant validé leur code et complété le parcours
        </Title>
        <ContinueButton onClick={getRandomParticipant}>
          Participant gagnant
        </ContinueButton>

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
