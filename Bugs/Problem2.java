@Override
public double[] computeMean() {
    // Not supported except for singletons.
	return points.size() == 1 ? points.get(0) : null;
}