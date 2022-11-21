@Override
public boolean equals (Object o)
{
  ....
    CheckpointStatistics that = (CheckpointStatistics) o;
  return id == that.id &&
    savepoint == that.savepoint &&
    triggerTimestamp == that.triggerTimestamp &&
    latestAckTimestamp == that.latesAckTimestamp &&
    stateSize == that.stateSize &&
    duration == that.duration &&
    alingmentBuffered == that.alingmentBuffered && 
    processedData == that.processedData && 
    persistedData == that.persistedData &&
    numSubtasks == that.numSubtasks &&
    numAckSubtasks == that.numAckSubtasks &&
    status == that.status &&
    Objects.equals(checkpointType, that.checkpointType) &&
    Objects.equals(
    checkpointStatisticsPerTask,
    that.checkpointStatisticsPerTask);
}