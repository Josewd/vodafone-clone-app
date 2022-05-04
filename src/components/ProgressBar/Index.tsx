import React from 'react';
import { Platform } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { ProgressView } from '@react-native-community/progress-view';

interface Props {
  viewStyle: string;
  indeterminate?: boolean;
  color: string;
  progress: number;
  width: string;
}

const Progress: React.FC<Props> = (props: Props) => {
  const { color, indeterminate, progress, viewStyle, width } = props;

  const progressStyleIOS =
    viewStyle.includes('bar') || viewStyle.includes('horizontal')
      ? 'bar'
      : 'default';

  return (
    <>
      {Platform.OS === 'android' ? (
        <ProgressBar
          style={{ width }}
          styleAttr="Horizontal"
          indeterminate={indeterminate}
          color={color}
          progress={progress}
        />
      ) : (
        <ProgressView
          style={{ width }}
          progressViewStyle={progressStyleIOS}
          progressTintColor={color}
          progress={progress}
        />
      )}
    </>
  );
};

export default Progress;
